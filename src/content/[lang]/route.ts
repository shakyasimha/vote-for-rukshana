import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";
import type { Language } from "@/ui/languages";
import { languages } from "@/ui/languages";

const allowedLangs:readonly Language[] = languages;

export async function GET(
  _req: NextRequest,
  { params }: { params: { lang: string; file: string } }
) {
  const lang = params.lang as Language;
  const file = params.file;

  if (!allowedLangs.includes(lang)) {
    return NextResponse.json({ error: "Invalid language" }, { status: 400 });
  }

  const filePath = path.join(process.cwd(), "src/content", `${lang}/${file}.mdx`);
  const text = await fs.readFile(filePath, "utf-8");
  return new NextResponse(text, { headers: { "Content-Type": "text/plain" } });
}