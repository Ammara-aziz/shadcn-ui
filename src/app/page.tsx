import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ChevronRight, Mail, Loader2 } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label'
import ProfileModal from '@/components/ProfileModal'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-3 p-24">
      <div>Hello i am shadcn-ui</div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Taxing Laughter: The Joke Tax Chronicles
      </h1>
      <blockquote className="mt-6 border-l-2 pl-6 italic font-semibold">
        "After all," he said, "everyone enjoys a good joke, so it's only fair that
        they should pay for the privilege."
      </blockquote>
      <p className="leading-7 ">
        The king, seeing how much happier his subjects were, realized the error of
        his ways and repealed the joke tax.
      </p>
      <div className='flex gap-5 '>
        <Button >PRIMARY</Button>
        <Button className='bg-cyan-600' variant={"secondary"}>* Secondary *</Button>
        <Button variant={"destructive"}>* Destructive *</Button>
        <Button variant="outline" size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className='flex gap-4'>
        <Button className='bg-lime-800'>
          <Mail className="mr-2 h-4 w-4" /> Login with Email
        </Button>
        <Button  disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin " />
          Please wait
        </Button>
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label className='flex p-1' htmlFor="email">Email with Label</Label>
        <Input type="email" id="email" placeholder='Email' />
      </div>
      <ProfileModal />
    </main>
  )
};

