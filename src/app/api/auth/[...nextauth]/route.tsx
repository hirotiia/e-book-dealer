import { authOptions } from '@/app/lib/next-auth/options';
import NextAuth from 'next-auth';

export async function GET() {
  NextAuth(authOptions);
}

export async function POST() {
  NextAuth(authOptions);
}
