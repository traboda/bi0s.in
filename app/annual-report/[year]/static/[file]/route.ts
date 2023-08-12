import { promises as fs } from 'fs';
import { join } from 'path';
import { fileTypeFromFile } from 'file-type';

export async function GET(request, context: { params: { year: string, file: string } }) {
  let fileBuffer;
  let filePath;
  try {
    // Get absolute path to the file
    filePath = join(process.cwd(), `./data/annual-reports/${context?.params?.year}/${context?.params?.file}`);

    // Check if file exists and read it
    fileBuffer = await fs.readFile(filePath);
  } catch (e) {
    console.error(e);
  }

  // If no file, return 404 response
  if (!fileBuffer) {
    return new Response('File not found', { status: 404 });
  }

  try {
    // Determine the file type
    const fileType = await fileTypeFromFile(filePath);
    if (!fileType) {
      return new Response('Unable to determine file type', { status: 500 });
    }

    // send file as response with proper content type
    return new Response(fileBuffer, {
      headers: { "Content-Type": fileType.mime },
      status: 200
    });
  } catch(e) {
    console.error(e);
    return new Response('Server error', { status: 500 });
  }
}