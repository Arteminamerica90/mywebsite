import { handleUpload } from '@vercel/blob/client';

export default async function handler(request, response) {
  const body = await request.body;

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname) => {
        // You can add auth here if needed. 
        // For now, we allow uploads if they match the path we expect.
        return {
          allowedContentTypes: [
            'image/jpeg', 'image/png', 'image/gif', 
            'application/pdf', 'application/msword', 
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'text/plain'
          ],
          maximumSizeInBytes: 10 * 1024 * 1024, // 10MB
        };
      },
      onUploadCompleted: async ({ blob, token }) => {
        // This callback is called on the server after the upload is completed.
        console.log('Blob upload completed:', blob.url);
      },
    });

    return response.status(200).json(jsonResponse);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
}
