import { NextRequest, NextResponse } from "next/server";
import { db, CreateTodo, ViewTodo, todoTable, } from "@/lib/drizzle";
import { sql } from "@vercel/postgres";
import { eq } from "drizzle-orm";

export async function GET(req: NextRequest) {

    await sql`CREATE TABLE IF NOT EXISTS task(
            id SERIAL PRIMARY KEY,
            title VARCHAR(222),
            description VARCHAR(222),
            date DATE,
            time TIME
        )`
    try {
        const res = await db.select().from(todoTable)
        return NextResponse.json(res)
    } catch (error) {
        console.log("get-errror", error)
    }
}
export async function POST(req: NextRequest) {
    const res = await req.json()
    await sql`CREATE TABLE IF NOT EXISTS task(
            id SERIAL PRIMARY KEY,
            title VARCHAR(222),
            description VARCHAR(222),
            date DATE,
            time TIME
        )`
    try {
        if (res) {
            const currentDate = new Date(); // Get current date and time
            const date = currentDate.toISOString().split("T")[0]; // Extract YYYY-MM-DD
            const time = currentDate.toTimeString().split(" ")[0]; // Extract HH:MM:SS
            const result = await db.insert(todoTable).values({ description: res.description, title: res.title, date: date, time: time }).returning()
            return NextResponse.json({ message: "Ok!" })
        }
    } catch (error) {
        console.log("post-error", error)
    }
}
export async function DELETE(req: NextRequest) {
    const res = await req.json()
    try {
        const result = await db.delete(todoTable).where(eq(todoTable.id, res))
        return NextResponse.json({ message: "Ok!" })
    } catch (error) {
        console.log("delete-error", error)
    }
}
