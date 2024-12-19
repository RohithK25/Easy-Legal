import { Document, Paragraph, TextRun, Packer } from 'docx';

export const generateWordDocument = async (content: string) => {
  const doc = new Document({
    sections: [{
      properties: {},
      children: content.split('\n').map(line => {
        // Check if the line contains bold text (marked with **)
        if (line.includes('**')) {
          // Remove the ** markers and create a bold text run
          const cleanText = line.replace(/\*\*/g, '');
          return new Paragraph({
            children: [
              new TextRun({
                text: cleanText,
                bold: true,
              })
            ]
          });
        }
        // Regular text without bold formatting
        return new Paragraph({
          children: [
            new TextRun({
              text: line,
              bold: false,
            })
          ]
        });
      })
    }]
  });

  return await Packer.toBlob(doc);
};