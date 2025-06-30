import { defineEventHandler, getRouterParam, createError } from "h3"
import { quizData } from "~/data/quizzes"

export default defineEventHandler(async (event) => {
	const quizId = getRouterParam(event, "quizId")

	if (!quizId || !quizData[quizId]) {
		throw createError({
			statusCode: 404,
			statusMessage: "Quiz not found",
		})
	}

	try {
		return {
			data: quizData[quizId],
		}
	} catch (error) {
		throw createError({
			statusCode: 500,
			statusMessage: "Failed to load quiz questions",
		})
	}
})
