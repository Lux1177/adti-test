import { readFile } from "fs/promises"
import { join } from "path"
import { defineEventHandler, createError } from "h3"

export default defineEventHandler(async (event) => {
	try {
		const questionsPath = join(process.cwd(), "data", "questions.txt")
		const data = await readFile(questionsPath, "utf-8")

		return {
			data: data,
		}
	} catch (error) {
		throw createError({
			statusCode: 500,
			statusMessage: "Failed to load questions file",
		})
	}
})
