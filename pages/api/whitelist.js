import { google } from 'googleapis';

const auth = new google.auth.GoogleAuth({
	credentials: {
		client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
		private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(
			/\\n/g,
			'\n'
		),
	},
	scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

export default async function handler(req, res) {
	if (req.method !== 'POST') {
		return res.status(405).json({ message: 'Method not allowed' });
	}

	try {
		const { referralWallet, yourWallet } = req.body;

		const response = await sheets.spreadsheets.values.get({
			spreadsheetId: process.env.GOOGLE_SHEETS_ID,
			range: 'Sheet1!A:A',
		});

		const nextId = response.data.values?.length || 1;

		const now = new Date();
		const formattedDate = now.toLocaleString('en-GB', {
			hour: '2-digit',
			minute: '2-digit',
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
		});

		await sheets.spreadsheets.values.append({
			spreadsheetId: process.env.GOOGLE_SHEETS_ID,
			range: 'Sheet1!A:D',
			valueInputOption: 'USER_ENTERED',
			requestBody: {
				values: [[nextId, formattedDate, referralWallet, yourWallet]],
			},
		});

		res.status(200).json({ message: 'Successfully registered' });
	} catch (error) {
		console.error('Error:', error);
		res.status(500).json({
			message: 'Internal server error',
			details: error.message,
		});
	}
}
