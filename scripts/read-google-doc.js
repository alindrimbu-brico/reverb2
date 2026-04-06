const { google } = require('googleapis');

async function readDoc(documentId, apiKey) {
    const docs = google.docs({
        version: 'v1',
        auth: apiKey, 
    });

    try {
        const res = await docs.documents.get({
            documentId: documentId,
        });
        
        let text = '';
        const content = res.data.body.content;
        for (const element of content) {
            if (element.paragraph) {
                for (const elem of element.paragraph.elements) {
                    if (elem.textRun) {
                        text += elem.textRun.content;
                    }
                }
            }
        }
        console.log(text);
    } catch (error) {
        if (error.code === 403) {
            console.error('Error 403: Permission Denied. Since we are using an API Key, you need to click "Share" on the document and set it to "Anyone on the internet with the link can view".');
        } else {
            console.error('Error fetching document:', error.message);
            console.error(error);
        }
    }
}

// Extract document ID from a full URL if necessary
let docId = process.argv[2];
const apiKey = process.argv[3];

if (!docId || !apiKey) {
    console.log("Usage: node scripts/read-google-doc.js <document_url_or_id> <apiKey>");
    process.exit(1);
}

// Handle full URLs
if (docId.includes('/d/')) {
    const match = docId.match(/\/d\/([a-zA-Z0-9-_]+)/);
    if (match && match[1]) {
        docId = match[1];
    }
}

readDoc(docId, apiKey);
