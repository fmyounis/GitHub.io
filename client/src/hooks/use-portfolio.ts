import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { type InsertMessage } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { PROJECTS_DATA, EXPERIENCE_DATA, SKILLS_DATA } from "@shared/static-data";

// === PROJECTS ===
export function useProjects() {
  return useQuery({
    queryKey: [api.projects.list.path],
    queryFn: async () => {
      return PROJECTS_DATA;
    },
  });
}

// === EXPERIENCE ===
export function useExperience() {
  return useQuery({
    queryKey: [api.experience.list.path],
    queryFn: async () => {
      return EXPERIENCE_DATA;
    },
  });
}

// === SKILLS ===
export function useSkills() {
  return useQuery({
    queryKey: [api.skills.list.path],
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
      // In a real static site, you'd use a service like Formspree
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
    onError: (error) => {
      toast({
        title: "Transmission Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
