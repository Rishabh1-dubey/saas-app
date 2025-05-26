"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { subjects } from "@/constants";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  name: z.string().min(1, { message: "name must be at least 2 characters." }),
  subject: z
    .string()
    .min(1, { message: "subject must be at least 2 characters." }),
  topic: z.string().min(1, { message: "topic must be at least 2 characters." }),
  voice: z.string().min(1, { message: "voice must be at least 2 characters." }),
  style: z.string().min(1, { message: "style must be at least 2 characters." }),
  duration: z.coerce.number().min(1, { message: "duration is Required." }),
});

const CompanionFrom = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      subject: "",
      topic: "",
      style: "",
      duration: 10,
    },
  });

  // 2. Define a submit handler.
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Companion Name</FormLabel>
              <FormControl>
                <Input
                  className=" text-gray-500"
                  placeholder="Enter your companion name"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject Name</FormLabel>

              <Select
                onValueChange={field.onChange}
                value={field.value}
                defaultValue={field.value}
              >
                <SelectTrigger className="w-[180px]  input capitalize">
                  <SelectValue placeholder="Select the subject" />
                </SelectTrigger>
                <SelectContent className="bg-white text-black">
                  {subjects.map((subject) => (
                    <SelectItem
                      value={subject}
                      key={subject}
                      className="capitalize"
                    >
                      {subject}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter your Topic Name</FormLabel>
              <FormControl>
                <Textarea
                  className="input text-gray-500"
                  placeholder="Ex. Derivative and Integrals"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="voice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Please Select Your voice</FormLabel>

              <Select>
                <SelectTrigger className="w-[180px]  input">
                  <SelectValue placeholder="Voice" />
                </SelectTrigger>
                <SelectContent className="bg-white text-black">
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Male</SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
{/* ----------------------------------------- */}
        <FormField
          control={form.control}
          name="style"
          render={({ field }) => (
            <FormItem>
              <FormLabel> Style</FormLabel>

              <Select
                onValueChange={field.onChange}
                value={field.value}
                defaultValue={field.value}
              >
                <SelectTrigger className="w-[180px]  input capitalize">
                  <SelectValue placeholder="Select your Style" />
                </SelectTrigger>
                <SelectContent className="bg-white text-black">
                 
                    <SelectItem value="formal">
                      Formal
                    </SelectItem> 
                    <SelectItem value="causal">
                      Causal
                    </SelectItem>
                
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />

        
        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estimate Duraton</FormLabel>
              <FormControl>
                <Input type="number"
                  className="input text-gray-500"
                  placeholder="Enter your Estimate duration"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className=" w-full bg-black text-white hover:bg-gray-800 hover:text-white"
          type="submit"
        >
          Build your own Companion
        </Button>
      </form>
    </Form>
  );
};

export default CompanionFrom;
