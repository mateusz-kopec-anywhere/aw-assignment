import { NextResponse } from "next/server";
import { reader } from "~/keystatic/reader";

export const POST = async (request: Request) => {
    const res = await request.json();
    const post = await reader.collections.content.read(res.params.slug);
    const headings = await post.content();
    return NextResponse.json({...post, headings}, {status: 200})
}
