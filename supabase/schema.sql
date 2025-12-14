-- Create incidents table
create table public.incidents (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  user_id uuid references auth.users(id),
  
  title text not null,
  type text not null,
  description text not null,
  location text not null,
  occurred_at timestamp with time zone not null,
  
  is_anonymous boolean default false,
  evidence_url text, -- URL to storage bucket
  
  status text default 'pending', -- pending, verified, dismissed
  resolved boolean default false
);

-- Secure the table with RLS
alter table public.incidents enable row level security;

-- Policy: Anyone can insert (Incidents can be anonymous)
-- Note: In a real app, you might want strictAuth for named reports
create policy "Anyone can insert incidents"
on public.incidents for insert
with check (true);

-- Policy: Users can see their own reports (if they provided ID)
create policy "Users can view their own incidents"
on public.incidents for select
using (auth.uid() = user_id);

-- Policy: Public can see VERIFIED incidents only (for the safety map)
create policy "Public can view verified incidents"
on public.incidents for select
using (status = 'verified');
