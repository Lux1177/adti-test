import { defineEventHandler, getRouterParam, createError } from "h3"
import { quizData } from "~/data/quizzes"

export default defineEventHandler(async (event) => {
	const quizId = getRouterParam(event, "quizId")

	if (!quizId) {
		throw createError({
			statusCode: 400,
			statusMessage: "Quiz ID is required",
		})
	}

	const data = quizData[quizId]

	if (!data) {
		throw createError({
			statusCode: 404,
			statusMessage: `Quiz '${quizId}' not found`,
		})
	}

	try {
		return {
			data: data,
		}
	} catch (error) {
		console.error(`Error loading data for quiz ${quizId}:`, error)
		throw createError({
			statusCode: 500,
			statusMessage: "Failed to load quiz questions",
		})
	}
})
