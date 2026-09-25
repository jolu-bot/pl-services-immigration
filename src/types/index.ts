export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'client' | 'agent' | 'admin';
  phone?: string;
  createdAt: Date;
}

export interface Application {
  id: string;
  userId: string;
  status: 'draft' | 'submitted' | 'under_review' | 'approved' | 'rejected';
  personalInfo: PersonalInfo;
  familyInfo: FamilyInfo;
  education: Education[];
  professional: Professional[];
  residences: Residence[];
  documents: Document[];
  createdAt: Date;
  updatedAt: Date;
}

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: string;
  birthPlace: string;
  nationality: string;
  passportNumber: string;
  maritalStatus: 'single' | 'married' | 'divorced' | 'widowed';
  address: string;
  city: string;
  country: string;
}

export interface FamilyInfo {
  fatherName?: string;
  fatherBirthDate?: string;
  fatherNationality?: string;
  motherName?: string;
  motherBirthDate?: string;
  motherNationality?: string;
  spouseName?: string;
  spouseBirthDate?: string;
  spouseNationality?: string;
  children?: Child[];
}

export interface Child {
  name: string;
  birthDate: string;
  nationality: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  country: string;
}

export interface Professional {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string;
  country: string;
}

export interface Residence {
  address: string;
  city: string;
  country: string;
  startDate: string;
  endDate?: string;
}

export interface Document {
  id: string;
  name: string;
  type: string;
  url: string;
  uploadedAt: Date;
}