import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    
    // Simulate sending contact email
    console.log(`Simulating Contact Form submission:`, { name, email, message });
    
    // In a real app, you'd use something like Resend or SendGrid here
    
    return NextResponse.json({ 
      success: true, 
      message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.' 
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Erro ao enviar mensagem.' 
    }, { status: 500 });
  }
}
