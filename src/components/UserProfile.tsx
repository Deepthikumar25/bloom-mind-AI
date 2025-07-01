
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LogOut, User, Calendar, Building } from 'lucide-react';

const UserProfile: React.FC = () => {
  const { user, logout } = useAuth();

  if (!user) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Card className="glass-card">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg text-slate-800">Profile</CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={logout}
            className="text-red-500 hover:text-red-600 hover:bg-red-50"
          >
            <LogOut className="h-4 w-4 mr-1" />
            Logout
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-4">
          <Avatar className="h-16 w-16 border-2 border-gradient-to-r from-wellness-blue to-wellness-purple">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="bg-gradient-to-r from-wellness-blue to-wellness-purple text-white font-bold">
              {user.name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="font-semibold text-slate-800 text-lg">{user.name}</h3>
            <p className="text-slate-600 text-sm">{user.email}</p>
            <Badge variant="secondary" className="mt-1 bg-wellness-blue/10 text-wellness-blue">
              {user.role}
            </Badge>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
          <div className="flex items-center space-x-2">
            <Building className="h-4 w-4 text-slate-500" />
            <div>
              <p className="text-xs text-slate-500">Department</p>
              <p className="text-sm font-medium text-slate-800">{user.department}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-slate-500" />
            <div>
              <p className="text-xs text-slate-500">Joined</p>
              <p className="text-sm font-medium text-slate-800">{formatDate(user.joinDate)}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
