import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
 
export async function createClient() {
  const cookieStore = await cookies()
 
  return createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options)
            })
          } catch {
            // El método setAll fue llamado desde un Server Component.
            // Esto se puede ignorar si tienes middleware que refresca
            // las sesiones del usuario.
          }
        }
      }
    }
  )
}