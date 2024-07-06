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

const formSchema = z.object({
  stateId: z.string(),
  name: z.string(),
  pros: z.string().optional(),
  cons: z.string().optional(),
  publicTransportation: z.string().optional(),
  weather: z.string().optional(),
  dating: z.string().optional(),
  lgbtq: z.string().optional(),
  diversity: z.string().optional(),
  safetyCrime: z.string().optional(),
});

const client = generateClient<Schema>();

export default function CreateCityUserInput() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const { data: states } = useQuery({
    queryKey: ["states"],
    queryFn: async () => {
      const response = await client.models.State.listStateBySortTypeAndName(
        { sortType: "State" }
        // @ts-expect-error: too complex
        //   { selectionSet: ["id", "institutionName", "name"] }
      );
      const responseData = response.data;
      if (!responseData) return null;
      return responseData;
    },
  });

  // form.usewatch to get the cities in the state

  const { userProfile } = usePermissions();

  const { toast } = useToast();

  const navigate = useNavigate();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const cityExists = await client.models.City.listCityByName(
      {
        name: values.name,
      },
      {
        authMode: "userPool",
      }
    );

    console.log(cityExists);
    let cityId = null;
    if (cityExists?.data?.length === 0) {
      cityId = await client.models.City.create(
        {
          sortType: "City",
          stateId: values.stateId,
          name: values.name,
        },
        {
          authMode: "userPool",
        }
      );
      if (cityId?.data) {
        cityId = cityId?.data?.id;
      }
    } else {
      cityId = cityExists?.data?.[0]?.id;
    }

    console.log(cityId);

    if (userProfile?.id && cityId) {
      const { stateId, name, ...rest } = values;
      await client.models.CityUserInput.create(
        {
          ...rest,
          sortType: "CityUserInput",
          userProfileId: userProfile?.id,
          cityId,
        },
        {
          authMode: "userPool",
        }
      );
    }
    toast({ title: "City Information Added!" });
    navigate("/cities");
  }

  return (
    <div className={`p-[12px] flex flex-col gap-[12px]`}>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link to="/cities">
              <BreadcrumbLink>Cities</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Add City Information</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className={`font-semibold text-[20px]`}>Add City Information</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="stateId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Which state is this city in?</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a state" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {states?.map((state) => {
                        return (
                          <SelectItem key={state.id} value={state.id}>
                            {state.abbreviation}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What is the name of the city?</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pros"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pros?</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cons"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cons?</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="publicTransportation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How is public transportation?</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="weather"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How is the weather?</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dating"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How is dating?</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lgbtq"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How is the LGBTQ?</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="diversity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How is the diversity?</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="safetyCrime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How is the safety/crime?</FormLabel>
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
