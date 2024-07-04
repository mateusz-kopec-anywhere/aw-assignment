import { NextResponse } from "next/server";
import { reader } from "~/keystatic/reader";

export const GET = async () => {
    const allPosts = await reader.collections.content.all();
    return NextResponse.json(allPosts, {status: 200})
}
