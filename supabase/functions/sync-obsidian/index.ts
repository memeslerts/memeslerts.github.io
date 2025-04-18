
import { serve } from "https://deno.fresh.dev/std@1.193.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.7'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { notes } = await req.json()

    for (const note of notes) {
      const { slug, title, content, excerpt, tags } = note
      
      await supabase
        .from('blog_posts')
        .upsert({
          slug,
          title,
          content,
          excerpt,
          tags,
          updated_at: new Date().toISOString(),
        }, {
          onConflict: 'slug'
        })
    }

    return new Response(
      JSON.stringify({ message: 'Notes synced successfully' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    )
  }
})
