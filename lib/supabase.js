import { createClient } from "@supabase/supabase-js";

// 빌드/프리렌더 시 환경변수가 없어도 createClient가 죽지 않도록 더미 URL로 폴백
// (환경변수가 실제로 없으면 런타임에 Supabase 호출만 실패하고, 앱 자체는 뜬다)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key";

export const supabase = createClient(supabaseUrl, supabaseKey);
