"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function RSVPForm() {
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);

  return (
    <Card className="p-8 text-center">
      <h2 className="text-3xl font-serif mb-6">RSVP</h2>
      <Dialog>
        <DialogTrigger asChild>
          <Button size="lg">Respond Now</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>RSVP to Our Wedding</DialogTitle>
          </DialogHeader>
          <form className="space-y-4" onSubmit={(e) => {
            e.preventDefault();
            setRsvpSubmitted(true);
          }}>
            <div>
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required />
            </div>
            <div>
              <Label htmlFor="guests">Number of Guests</Label>
              <Input id="guests" type="number" min="1" max="4" required />
            </div>
            <div>
              <Label htmlFor="message">Message (Optional)</Label>
              <Textarea id="message" />
            </div>
            <Button type="submit" className="w-full">Submit RSVP</Button>
          </form>
        </DialogContent>
      </Dialog>
    </Card>
  );
}