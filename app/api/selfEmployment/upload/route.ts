import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    // Save to a data directory in your project
    const path = join(process.cwd(), 'data', 'business-data.json');
    await writeFile(path, buffer);
    
    return NextResponse.json({ message: 'File uploaded successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    const path = join(process.cwd(), 'data', 'financial-data.json');
    await writeFile(path, JSON.stringify(data, null, 2));
    return NextResponse.json({ message: 'Data saved successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Save failed' }, { status: 500 });
  }
} 