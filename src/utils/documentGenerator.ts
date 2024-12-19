import { Document, Paragraph, TextRun, Packer } from 'docx';

export const generateWordDocument = async (content: string) => {
  const doc = new Document({
    sections: [{
      properties: {},
      children: content.split('\n').map(line => 
        new Paragraph({
          children: [
            new TextRun({
              text: line,
              bold: line.startsWith('**') && line.endsWith('**'),
            })
          ]
        })
      )
    }]
  });

  return await Packer.toBlob(doc);
};