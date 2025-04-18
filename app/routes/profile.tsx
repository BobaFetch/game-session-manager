import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Separator } from "~/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "~/components/ui/select";
import { Switch } from "~/components/ui/switch";
import { User, Save, Edit, Library } from "lucide-react";

interface User {
  user_name: string;
  platforms: Platform;
  groups?: Group[];
  create_date?: string;
}

interface Group {
  id: string; // uuid?
  name: string;
}

interface Platform {
  steam_id?: string;
  xbox_id?: string;
  psn_id?: string;
  nintendo_id?: string;
}

const user: ProfileSettings = {
  user_name: "forest andy",
  platforms: {
    steam_id: "homosexualsanta",
    xbox_id: "drunkenJza",
    psn_id: "drunkenJza",
  },
  groups: [
    {
      id: "123123",
      name: "Gaymers"
    }
  ],
  selectedGroup: "12323124124124",
  isEditingUsername: false,
}

interface ProfileSettings extends User {
  selectedGroup: string;
  isEditingUsername?: boolean;
}

export default function Profile() {
  const [userProfile, setUserProfile] = useState<ProfileSettings | null>(user);

  return (
    <div className='flex justify-center w-full py-6'>
      <Card className='w-full max-w-md'>
        <CardHeader>
          <div className='flex items-center jusandytify-between mb-4'>
            <div className='flex items-center space-x-2'>
              <User className='h-5 w-5 text-gray-500' />
              <div className='w-full flex items-center justify-between'>
                <CardTitle>
                  {userProfile?.isEditingUsername ? (
                    <Input
                      id='username'
                      value={userProfile?.user_name}
                      onChange={() => null}
                      className='w-full'
                    />
                  ) : (
                    <div className='p-2 border rounded-md bg-gray-50'>
                      {userProfile?.user_name}
                    </div>
                  )}
                </CardTitle>
                <Button
                  variant='ghost'
                  size='sm'
                  onClick={() => null}
                >
                  <Edit className='h-4 w-4' />
                </Button>
              </div>
            </div>
            <Button onClick={() => null} size='sm' variant='outline'>
              <Save className='h-4 w-4 mr-2' />
              Save
            </Button>
          </div>
          <Separator />
          <CardDescription>Manage your connections and groups</CardDescription>
        </CardHeader>

        <CardContent className='space-y-6'>

          <Separator />

          <div className='space-y-4'>
            <h3 className='text-lg font-medium'>Platforms</h3>

            <div className='space-y-3'>
              <div className='grid grid-cols-3 gap-2 items-center'>
                <Label htmlFor='steam_id'>Steam Id</Label>
                <Input
                  id='steam_id'
                  value={userProfile?.platforms.steam_id}
                  onChange={() => null}
                  className='col-span-2'
                />
              </div>

              <div className='grid grid-cols-3 gap-2 items-center'>
                <Label htmlFor='xbox_id'>Xbox ID</Label>
                <Input
                  id='xbox_id'
                  value={userProfile?.platforms.xbox_id}
                  onChange={() => null}
                  className='col-span-2'
                />
              </div>

              <div className='grid grid-cols-3 gap-2 items-center'>
                <Label htmlFor='psn_id'>Playstation ID</Label>
                <Input
                  id='psn_id'
                  value={userProfile?.platforms.psn_id}
                  onChange={() => null}
                  className='col-span-2'
                />
              </div>

              <div className='grid grid-cols-3 gap-2 items-center'>
                <Label htmlFor='nintendo_id'>Nintendo ID</Label>
                <Input
                  id='nintendo_id'
                  value={userProfile?.platforms.nintendo_id}
                  onChange={() => null}
                  className='col-span-2'
                />
              </div>
            </div>
          </div>

          <Separator />

          <div className='space-y-2'>
            <h3 className='text-lg font-medium'>Groups</h3>
            <Select
              value={userProfile?.groups?.[0].id ?? ""}
              onValueChange={() => null}
            >
              <SelectTrigger>
                <SelectValue placeholder="Groups" />
              </SelectTrigger>
              <SelectContent>
                {userProfile?.groups?.map(group => (
                  <SelectItem key={group.id} value={group.id}>
                    {group.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>

        <CardFooter>
          <Button className='w-full' variant='outline'>
            <Library className='h-4 w-4 mr-2' />
            Library
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
