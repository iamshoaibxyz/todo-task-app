
import { sql } from "@vercel/postgres"
import { date, pgTable, serial, time, timestamp, varchar, } from "drizzle-orm/pg-core"

import { drizzle } from "drizzle-orm/vercel-postgres"

export const todoTable = pgTable("task", {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 222 }),
    description: varchar("description", { length: 222 }),
    date: date("date").notNull(), // Define a column for the date
    time: time("time").notNull(), // Define a column for the time
})

export type ViewTodo = typeof todoTable.$inferSelect
export type CreateTodo = typeof todoTable.$inferInsert

export const db = drizzle(sql)