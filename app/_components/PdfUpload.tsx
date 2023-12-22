"use client";

import React, { useState, FormEvent } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  url: z.string().url({ message: "読み取りに失敗しました。URLに間違いが無いかご確認ください" }),
});

const PdfUpload = () => {
  const [pdfData, setPdfData] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { url: "" },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      const response = await fetch(values.url);
      const contentType = response.headers.get("Content-Type");

      if (contentType === "application/pdf") {
        const pdfBlob = await response.blob();
        setPdfData(URL.createObjectURL(pdfBlob));
      } else {
        setPdfData(null);
      }
    } catch (error) {
      console.error("Error fetching file:", error);
      setPdfData(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>URL</FormLabel>
                <FormControl>
                  <Input placeholder="https://" {...field} />
                </FormControl>
                <FormDescription>URLを入力してください</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">送信</Button>
        </form>
      </Form>

      {isLoading ? (
        <div>Loading...</div>
      ) : pdfData ? (
        <iframe src={pdfData} style={{ width: "100%", height: "500px" }} title="PDF Viewer"></iframe>
      ) : (
        <div>No PDF loaded</div>
      )}
    </div>
  );
};

export default PdfUpload;
