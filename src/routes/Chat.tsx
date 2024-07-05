import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "@aws-amplify/ui-react";
import { Button } from "../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { useQuery } from "@tanstack/react-query";
import { generateClient } from "aws-amplify/api";
import { Schema } from "../../amplify/data/resource";
import { useToast } from "../components/ui/use-toast";
import { Link, useNavigate } from "react-router-dom";
import usePermissions from "../hooks/usePermissions";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "../components/ui/breadcrumb";
import { Switch } from "../components/ui/switch";
import DND from "../components/DND";
import { useState } from "react";

const client = generateClient<Schema>();

const formSchema = z.object({
  content: z.string(),
});

export default function Chat() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const { data: comments } = useQuery({
    queryKey: ["comments", "general"],
    queryFn: async () => {
      // ts-expect-error: too complex
      const response =
        await client.models.Comment.listCommentByCommentTypeAndCreatedAt(
          {
            commentType: "general",
          },
          {
            selectionSet: [
              "id",
              "content",
              "userProfile.username",
              "createdAt",
            ],
          }
        );
      const responseData = response.data;
      if (!responseData) return null;
      return responseData;
    },
  });

  const { toast } = useToast();

  const { userProfile } = usePermissions();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (userProfile?.id) {
      await client.models.Comment.create(
        {
          ...values,
          userProfileId: userProfile.id,
          sortType: "Comment",
          commentType: "general",
        },
        {
          authMode: "userPool",
        }
      );
    }
    toast({ title: "Message posted." });
  }

  return (
    <div className={`p-[12px] flex flex-col gap-[12px]`}>
      <h1 className={`font-semibold text-[20px]`}>Create Rank List</h1>
      {comments?.map((comment) => {
        return (
          <div>
            {comment.content}
            {comment.userProfile.username}
            {comment.createdAt}
          </div>
        );
      })}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Add message here:</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
