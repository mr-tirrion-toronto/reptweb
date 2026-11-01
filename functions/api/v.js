export async function onRequestPost({request}){let b={};try{b=await request.json()}catch(e){return new Response('bad',{status:400})}
const cf=request.cf||{};const SB='https://swxcycissxmxuazkpoay.supabase.co',K='sb_publishable_u4CIhnsKdHM_XmFDwfaV6A_dSeFwded';
const body={p_country:cf.country||null,p_region:cf.region||null,p_city:cf.city||null,p_section:String(b.s||'home').slice(0,20),p_ref:String(b.r||'').slice(0,200),p_device:String(b.d||'').slice(0,20),p_sid:String(b.sid||'').slice(0,64)};
const r=await fetch(SB+'/rest/v1/rpc/pf_log_visit',{method:'POST',headers:{'content-type':'application/json',apikey:K,authorization:'Bearer '+K},body:JSON.stringify(body)});
return new Response(null,{status:r.ok?204:502})}
