import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { prompt, systemContext } = await req.json();

    const apiKey = process.env.PERPLEXITY_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Missing PERPLEXITY_API_KEY" }, { status: 500 });
    }

    const response = await fetch('https://api.perplexity.ai/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'sonar',
        messages: [
          {
            role: 'system',
            content: systemContext || 'Tu ești Nevronix, asistentul AI integrat în aplicațiile clientului. Răspunde extrem de scurt, profesionist și la obiect în limba română (maxim 2 propoziții).'
          },
          {
            role: 'user',
            content: prompt
          }
        ]
      })
    });

    if (!response.ok) {
        const err = await response.text();
        return NextResponse.json({ error: `Perplexity API error: ${err}` }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json({ reply: data.choices[0].message.content });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
