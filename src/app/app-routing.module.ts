import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'edit-profile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'home-results', loadChildren: './pages/home-results/home-results.module#HomeResultsPageModule' },
  { path: 'requirements', loadChildren: './pages/requirements/requirements.module#RequirementsPageModule' },  { path: 'register2', loadChildren: './pages/register2/register2.module#Register2PageModule' },
  { path: 'register1', loadChildren: './pages/register1/register1.module#Register1PageModule' },
  { path: 'id-upload', loadChildren: './pages/id-upload/id-upload.module#IdUploadPageModule' },
  { path: 'passport-upload', loadChildren: './pages/passport-upload/passport-upload.module#PassportUploadPageModule' },
  { path: 'academic-uploads', loadChildren: './pages/academic-uploads/academic-uploads.module#AcademicUploadsPageModule' },
  { path: 'cv-upload', loadChildren: './pages/cv-upload/cv-upload.module#CvUploadPageModule' },
  { path: 'rec-upload', loadChildren: './pages/rec-upload/rec-upload.module#RecUploadPageModule' },
  { path: 'lcupload', loadChildren: './pages/lcupload/lcupload.module#LCUploadPageModule' },
  { path: 'idtype', loadChildren: './pages/idtype/idtype.module#IDTypePageModule' },
  { path: 'login2', loadChildren: './pages/login2/login2.module#Login2PageModule' },
  { path: 'error', loadChildren: './pages/error/error.module#ErrorPageModule' },
  { path: 'welcome', loadChildren: './pages/welcome/welcome.module#WelcomePageModule' },
  { path: '', loadChildren: './pages/welcome/welcome.module#WelcomePageModule' },
  { path: 'progess', loadChildren: './pages/progess/progess.module#ProgessPageModule' },
  { path: 'kin', loadChildren: './pages/kin/kin.module#KinPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
