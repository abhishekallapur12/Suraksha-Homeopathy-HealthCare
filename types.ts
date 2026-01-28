
export interface Service {
  id: string;
  name: string;
  description?: string;
}

export interface Testimonial {
  patient: string;
  feedback: string;
  recommendation: boolean;
}

export interface Doctor {
  name: string;
  qualifications: string[];
  experience: string;
  specializations: string[];
  rating: string;
  consultationFee: string;
  availability: {
    [key: string]: string;
  };
  images: {
    clinical: string;
    consultation: string;
  };
}

export interface ClinicInfo {
  name: string;
  tagline: string;
  description: string;
  address: string;
  landmark: string;
  city: string;
  area: string;
  contact: string;
  timings: {
    monSat: string;
    sun: string;
  };
}
