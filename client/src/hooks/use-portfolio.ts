import { useQuery, useMutation } from "@tanstack/react-query";
import { type InsertMessage } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { PROJECTS_DATA, EXPERIENCE_DATA, SKILLS_DATA } from "@shared/static-data";

// === PROJECTS ===
export function useProjects() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      return PROJECTS_DATA;
    },
  });
}

// === EXPERIENCE ===
export function useExperience() {
  return useQuery({
    queryKey: ["experience"],
    queryFn: async () => {
      return EXPERIENCE_DATA;
    },
  });
}

// === SKILLS ===
export function useSkills() {
  return useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      return SKILLS_DATA;
    },
  });
}

// === CONTACT ===
export function useSubmitContact() {
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (data: InsertMessage) => {
      // For static site, we'll just simulate a successful submission
      console.log("Contact form submitted (static mode):", data);
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { success: true, message: "Message sent (simulated)" };
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Your message has been successfully transmitted.",
        className: "border-primary text-primary bg-background/90",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Transmission Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
