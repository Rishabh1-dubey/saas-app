"use server";

import { auth } from "@clerk/nextjs/server";
import { createSupabaseClient } from "../supabase";
import { id } from "zod/v4/locales";


export const createCompanion = async (formData: CreateCompanion) => {
  const { userId: author } = await auth();
  const supabase = createSupabaseClient();

  const { data, error } = await supabase
    .from("companions")
    .insert({ ...formData, author })
    .select();

  if (error || !data)
    throw new Error(error?.message || "Failed to create a companion");

  return data[0];
};

// get all companion
export const getAllCompanions:any = async ({
  limit = 10,
  page = 1,
  subjects,
  topic,
}: typeof getAllCompanions) => {
  const supabase = createSupabaseClient();
  let query = supabase.from("companions").select();

  if (subjects && topic) {
    query = query
      .ilike("subject", `%${subjects}%`)
      .or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`);
  } else if (subjects) {
    query = query.ilike("subject", `%${subjects}`);
  } else if (topic) {
    query = query.or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`);
  }
  query = query.range((page - 1) * limit, page * limit - 1);

  const { data: companions, error } = await query;

  if (error) throw new Error(error.message);
  return companions;
};


export const getCompanion = async(id:string)=>{
  const supabase = createSupabaseClient()

  const{data,error}=await supabase.from('companions').select().eq('id',id)

  if(error) return console.log(error)
    return data[0]
}