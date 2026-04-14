"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { User, Bell, Palette, Shield } from "lucide-react";
import { toast } from "sonner";

function ProfileTab() {
  const [profileData, setProfileData] = useState({
    name: "홍길동",
    email: "user@example.com",
    bio: "안녕하세요!",
  });

  const handleSave = () => {
    toast.success("프로필이 저장되었습니다", {
      description: "변경사항이 적용되었습니다.",
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>프로필 사진</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>HG</AvatarFallback>
            </Avatar>
            <Button variant="outline">사진 변경</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>기본 정보</CardTitle>
          <CardDescription>계정의 기본 정보를 관리하세요</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="profile-name">이름</Label>
            <Input
              id="profile-name"
              value={profileData.name}
              onChange={(e) =>
                setProfileData({ ...profileData, name: e.target.value })
              }
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="profile-email">이메일</Label>
            <Input
              id="profile-email"
              type="email"
              value={profileData.email}
              onChange={(e) =>
                setProfileData({ ...profileData, email: e.target.value })
              }
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="profile-bio">소개</Label>
            <Input
              id="profile-bio"
              placeholder="간단한 소개를 작성해주세요"
              value={profileData.bio}
              onChange={(e) =>
                setProfileData({ ...profileData, bio: e.target.value })
              }
              className="mt-1"
            />
          </div>

          <Button onClick={handleSave}>저장</Button>
        </CardContent>
      </Card>
    </div>
  );
}

function NotificationTab() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    marketing: false,
    updates: true,
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>알림 설정</CardTitle>
        <CardDescription>알림을 받을 방식을 선택하세요</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">이메일 알림</p>
            <p className="text-sm text-muted-foreground">
              중요한 업데이트를 이메일로 받으세요
            </p>
          </div>
          <Switch
            checked={notifications.email}
            onCheckedChange={(checked) =>
              setNotifications({ ...notifications, email: checked })
            }
          />
        </div>

        <div className="border-t" />

        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">푸시 알림</p>
            <p className="text-sm text-muted-foreground">
              브라우저 푸시 알림을 받으세요
            </p>
          </div>
          <Switch
            checked={notifications.push}
            onCheckedChange={(checked) =>
              setNotifications({ ...notifications, push: checked })
            }
          />
        </div>

        <div className="border-t" />

        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">마케팅 이메일</p>
            <p className="text-sm text-muted-foreground">
              새로운 기능과 프로모션 정보를 받으세요
            </p>
          </div>
          <Switch
            checked={notifications.marketing}
            onCheckedChange={(checked) =>
              setNotifications({ ...notifications, marketing: checked })
            }
          />
        </div>

        <div className="border-t" />

        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">제품 업데이트</p>
            <p className="text-sm text-muted-foreground">
              새로운 기능과 버그 수정 소식을 받으세요
            </p>
          </div>
          <Switch
            checked={notifications.updates}
            onCheckedChange={(checked) =>
              setNotifications({ ...notifications, updates: checked })
            }
          />
        </div>
      </CardContent>
    </Card>
  );
}

function AppearanceTab() {
  const [theme, setTheme] = useState("system");
  const [language, setLanguage] = useState("ko");

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>테마</CardTitle>
          <CardDescription>선호하는 테마를 선택하세요</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-3">
            {[
              { id: "light", label: "라이트" },
              { id: "dark", label: "다크" },
              { id: "system", label: "시스템" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setTheme(item.id)}
                className={`p-3 rounded-lg border-2 text-sm font-medium transition-colors ${
                  theme === item.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>언어</CardTitle>
          <CardDescription>사용할 언어를 선택하세요</CardDescription>
        </CardHeader>
        <CardContent>
          <Select
            value={language}
            onValueChange={(value) => {
              if (value) setLanguage(value);
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ko">한국어</SelectItem>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="ja">日本語</SelectItem>
              <SelectItem value="zh">中文</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>
    </div>
  );
}

function SecurityTab() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>비밀번호</CardTitle>
          <CardDescription>
            계정의 보안을 위해 정기적으로 변경하세요
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button>비밀번호 변경</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>로그인 활동</CardTitle>
          <CardDescription>최근 로그인 기록을 확인하세요</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-sm">
            <p className="font-medium">마지막 로그인</p>
            <p className="text-muted-foreground">오늘 14:30 (Chrome, Windows)</p>
          </div>
          <Button variant="outline">모든 세션 보기</Button>
        </CardContent>
      </Card>

      <Card className="border-destructive/50 bg-destructive/5">
        <CardHeader>
          <CardTitle className="text-destructive">계정 삭제</CardTitle>
          <CardDescription>이 작업은 되돌릴 수 없습니다</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="destructive">계정 삭제</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export function SettingsForm() {
  return (
    <Tabs defaultValue="profile" className="w-full" orientation="vertical">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* 사이드바 탭 리스트 */}
        <TabsList className="w-full md:w-48 h-auto flex-col justify-start">
          <TabsTrigger value="profile" className="w-full justify-start gap-2">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">프로필</span>
          </TabsTrigger>
          <TabsTrigger
            value="notifications"
            className="w-full justify-start gap-2"
          >
            <Bell className="h-4 w-4" />
            <span className="hidden sm:inline">알림</span>
          </TabsTrigger>
          <TabsTrigger value="appearance" className="w-full justify-start gap-2">
            <Palette className="h-4 w-4" />
            <span className="hidden sm:inline">외관</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="w-full justify-start gap-2">
            <Shield className="h-4 w-4" />
            <span className="hidden sm:inline">보안</span>
          </TabsTrigger>
        </TabsList>

        {/* 콘텐츠 */}
        <div className="md:col-span-3">
          <TabsContent value="profile">
            <ProfileTab />
          </TabsContent>
          <TabsContent value="notifications">
            <NotificationTab />
          </TabsContent>
          <TabsContent value="appearance">
            <AppearanceTab />
          </TabsContent>
          <TabsContent value="security">
            <SecurityTab />
          </TabsContent>
        </div>
      </div>
    </Tabs>
  );
}
