// app/page.tsx
import { redirect } from 'next/navigation';

export default function RootPage() {
  redirect('/en'); // or '/fa' or detect dynamically
}
