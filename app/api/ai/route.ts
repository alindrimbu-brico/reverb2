import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { prompt, systemContext } = await req.json();

    if (!process.env.PERPLEXITY_API_KEY) {
      return NextResponse.json({ error: "Missing API Key" }, { status: 500 });
    }

    const response = await fetch('https://api.perplexity.ai/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.PERPLEXITY_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'sonar',
        messages: [
          {
            role: 'system',
            content: systemContext || 'Tu ești Nevronix, asistentul AI integrat în aplicațiile clientului. Trebuie să răspunzi extrem de scurt, profesionist și orientat către obiectiv în limba română (maxim 2-3 propoziții), simulând că ești angajatul virtual care știe tot despre afacere.'
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
