import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const schema = z.object({
  team_name: z.string().trim().min(1, "Required").max(100),
  leader_name: z.string().trim().min(1, "Required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  whatsapp: z
    .string()
    .trim()
    .min(8, "Too short")
    .max(20)
    .regex(/^[+0-9 \-]+$/, "Digits, spaces, + or - only"),
  pitch_deck_url: z.string().trim().url("Must be a valid URL").max(500),
});

type FormValues = z.infer<typeof schema>;

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function RegisterDialog({ open, onOpenChange }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);
    const { error } = await supabase.from("registrations").insert(values);
    setSubmitting(false);
    if (error) {
      toast.error("Registration failed", { description: error.message });
      return;
    }
    toast.success("You're in!", {
      description: "We received your registration. Check your email soon.",
    });
    reset();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-card max-w-lg border-border/40 sm:rounded-2xl">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Register your team</DialogTitle>
          <DialogDescription>
            Lock in your spot for UIIW 2026. We'll reach out within 48 hours.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Field id="team_name" label="Team Name" error={errors.team_name?.message}>
            <Input
              id="team_name"
              placeholder="Neon Foragers"
              autoComplete="off"
              {...register("team_name")}
            />
          </Field>
          <Field id="leader_name" label="Team Leader Name" error={errors.leader_name?.message}>
            <Input
              id="leader_name"
              placeholder="Full name"
              autoComplete="name"
              {...register("leader_name")}
            />
          </Field>
          <Field id="email" label="Email Address" error={errors.email?.message}>
            <Input
              id="email"
              type="email"
              placeholder="you@university.ac.id"
              autoComplete="email"
              {...register("email")}
            />
          </Field>
          <Field id="whatsapp" label="WhatsApp Number" error={errors.whatsapp?.message}>
            <Input
              id="whatsapp"
              inputMode="tel"
              placeholder="+62 812 3456 7890"
              autoComplete="tel"
              {...register("whatsapp")}
            />
          </Field>
          <Field id="pitch_deck_url" label="Pitch Deck Link" error={errors.pitch_deck_url?.message}>
            <Input
              id="pitch_deck_url"
              type="url"
              placeholder="https://drive.google.com/..."
              {...register("pitch_deck_url")}
            />
          </Field>

          <Button
            type="submit"
            disabled={submitting}
            className="w-full bg-[image:var(--gradient-primary)] font-semibold text-accent-foreground hover:opacity-95 glow-ring"
          >
            {submitting ? (
              <>
                <Loader2 className="mr-2 size-4 animate-spin" /> Submitting...
              </>
            ) : (
              "Submit Registration"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
