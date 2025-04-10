
import {
  Calendar,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
export default function Home() {
  const attendance = 75; // Example initial value for attendance
  const enrollmentProgress = 60; // Example initial value for enrollment progress
  return (
      <main className="flex-1 overflow-auto p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Students
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,248</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500">+12%</span> from last semester
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Teachers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">86</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500">+4%</span> from last semester
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Classrooms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-blue-500">+2</span> new rooms added
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Courses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">124</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500">+8</span> new courses
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-1 lg:col-span-2">
            <CardHeader>
              <CardTitle>Attendance Overview</CardTitle>
              <CardDescription>Daily student attendance rate</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-4xl font-bold text-blue-600">
                    {attendance || 0}%
                </div>
                <div className="text-sm text-muted-foreground">Target: 90%</div>
              </div>
              <Progress value={attendance} className="mt-4 h-2" />
              <div className="mt-4 grid grid-cols-3 gap-4 text-center text-sm">
                <div>
                  <div className="font-medium">Present</div>
                  <div className="text-muted-foreground">{attendance}%</div>
                </div>
                <div>
                  <div className="font-medium">Absent</div>
                  <div className="text-muted-foreground">
                    {100 - attendance}%
                  </div>
                </div>
                <div>
                  <div className="font-medium">Excused</div>
                  <div className="text-muted-foreground">4%</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Enrollment Progress</CardTitle>
              <CardDescription>New student enrollment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-4xl font-bold text-blue-600">
                  {enrollmentProgress}%
                </div>
                <div className="text-sm text-muted-foreground">
                  Target: 100%
                </div>
              </div>
              <Progress value={enrollmentProgress} className="mt-4 h-2" />
              <div className="mt-4 text-sm">
                <div className="font-medium">Enrollment Status</div>
                <div className="text-muted-foreground">
                  {enrollmentProgress < 50
                    ? "Behind schedule"
                    : enrollmentProgress < 80
                    ? "On track"
                    : "Ahead of schedule"}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>
                School calendar for the next 7 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-md bg-blue-100 p-2 dark:bg-blue-900">
                    <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium">Parent-Teacher Conference</p>
                    <p className="text-sm text-muted-foreground">
                      Tomorrow, 4:00 PM - 7:00 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-md bg-blue-100 p-2 dark:bg-blue-900">
                    <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium">Science Fair</p>
                    <p className="text-sm text-muted-foreground">
                      Friday, 9:00 AM - 3:00 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-md bg-blue-100 p-2 dark:bg-blue-900">
                    <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium">Staff Development Day</p>
                    <p className="text-sm text-muted-foreground">
                      Monday, All Day (No Students)
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Full Calendar
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Announcements</CardTitle>
              <CardDescription>
                Latest school-wide notifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium">New Curriculum Updates</p>
                    <Badge className="bg-blue-500">New</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Math and Science departments have updated their curriculum
                    for the upcoming semester.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Posted 2 hours ago
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium">Facility Maintenance</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    The gymnasium will be closed for renovations from June
                    15-30.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Posted yesterday
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium">Summer Program Registration</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Registration for summer enrichment programs is now open.
                    Space is limited.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Posted 3 days ago
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Announcements
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
  );
}
