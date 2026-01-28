import { ClinicInfo, Doctor, Testimonial } from './types';

export const CLINIC_DATA: ClinicInfo = {
  name: "Suraksha Homeopathy Healthcare",
  tagline: "Complete Homeopathy & Psychological Care for a Healthier Life",
  description: "At Suraksha Homeopathy HealthCare, we provide complete healthcare which aims at raising health standards of patients and making the society healthy. We provide exceptional quality medical care for the entire family, focusing on treating the root cause of illness through classical homeopathy combined with psychological counseling and energy healing therapies.",
  address: "#91, Basement Floor, 19th Main Road, 60 Feet Road, Koramangala 6th Block",
  landmark: "Next to Central Bank",
  city: "Bangalore",
  area: "Koramangala",
  contact: "+91-9876543210", 
  timings: {
    monSat: "09:00 AM - 08:00 PM",
    sun: "05:00 PM - 08:00 PM"
  }
};

export const DOCTOR_DATA: Doctor = {
  name: "Dr. Sheeba Rani",
  qualifications: ["BHMS", "MD - Homeopathy", "MS - Counselling and Psychotherapy"],
  experience: "27 years overall experience",
  specializations: ["Homoeopath", "Counselling Psychologist", "AYUSH Practitioner"],
  rating: "85%",
  consultationFee: "₹500",
  availability: {
    monSat: "09:00 AM - 08:00 PM",
    sunday: "05:00 PM - 08:00 PM"
  },
  images: {
    clinical: "https://content.jdmagicbox.com/v2/comp/bangalore/q3/080pxx80.xx80.170129143610.i9q3/catalogue/suraksha-homeopathy-health-care-koramangala-bangalore-homeopathic-clinics-ezki6noc9c.jpg?imwidth=463.3333333333333",
    consultation: "https://content.jdmagicbox.com/v2/comp/bangalore/q3/080pxx80.xx80.170129143610.i9q3/catalogue/suraksha-homeopathy-health-care-koramangala-bangalore-homeopathic-clinics-zqi0yabem4.jpg?imwidth=463.3333333333333"
  }
};

export const SERVICES: string[] = [
  "Skin Disease Treatment", "Allergy Treatment", "Childhood Infections",
  "Infertility Evaluation / Treatment", "Cervical Spondylitis Treatment", "Acidity Treatment",
  "Dysmenorrhea Treatment", "Crystal Healing", "Acne / Pimples Treatment",
  "Gastritis Treatment", "Respiratory Tract Infection Treatment", "PCOD / PCOS Treatment",
  "Obesity Treatment", "Tonsillitis Treatment", "Headache Management",
  "Diabetes Management", "Chronic Health Issues Management", "General Health Checkup",
  "Depression Treatment", "Pre and Post Delivery Care", "Joint Pain Treatment",
  "Chronic Pain Treatment", "Abdominal Pain Treatment", "Arthritis Management",
  "Anal Fissure Treatment", "Wart Removal", "Sleep Disorder Treatment",
  "Pranic Psychotherapy", "Energy Healing", "Migraine Treatment",
  "Fistula Treatment", "Thyroid Disorder Treatment", "Psoriasis Treatment"
];

export const TESTIMONIALS: Testimonial[] = [
  {
    patient: "Mamtha L",
    feedback: "Doctor was very supportive, understood the problem well and gave practical guidance. Helped me with certain tips to work on. Thanks Madam.",
    recommendation: true
  },
  {
    patient: "Verified Patient",
    feedback: "A listening ear with practical yet supportive advice which strengthened my decision-making. Knowing I was guided by a top Dr gave me assurance!",
    recommendation: true
  },
  {
    patient: "Verified Patient (Ankle Pain)",
    feedback: "Husband had acute ankle inflammation due to uric acid for 5 months. After consulting Dr. Sheeba, within 2 months we got best results. Highly recommended.",
    recommendation: true
  },
  {
    patient: "Vijaya Lakshmi",
    feedback: "Suffering from hypertension for 5 years. After 2 months of Homeopathy at Suraksha, my levels are maintained and symptoms of numbness settled. Very happy.",
    recommendation: true
  },
  {
    patient: "Chaya G",
    feedback: "Suffered from thyroid for many years with side effects from other medicines. After treatment here, my thyroid levels are normal. My whole family believes in it now.",
    recommendation: true
  },
  {
    patient: "Poornima R",
    feedback: "Suffering from PCOD for 10 years. Tried everything but didn't feel good. In only 3 months here, I felt great improvement. She has a magical hand!",
    recommendation: true
  },
  {
    patient: "Dinesh R",
    feedback: "Had skin infection for 3 months. Within 10 days of treatment at Suraksha Koramangala, my infection has completely vanished.",
    recommendation: true
  },
  {
    patient: "Meera J",
    feedback: "Started treatment for my son for cold allergy. Within 2 months his immunity is stronger and cold has subsided. Glad we consulted her.",
    recommendation: true
  }
];

export const GALLERY_IMAGES = [
  { title: "Clinic Entrance", url: "https://images.jdmagicbox.com/v2/comp/bangalore/q3/080pxx80.xx80.170129143610.i9q3/catalogue/suraksha-homeopathy-health-care-koramangala-bangalore-homeopathic-clinics-4boks10vy1.jpg" },
  { title: "Reception Area", url: "https://images.jdmagicbox.com/v2/comp/bangalore/q3/080pxx80.xx80.170129143610.i9q3/catalogue/suraksha-homeopathy-health-care-koramangala-bangalore-homeopathic-clinics-m3zb38iqh7.jpg" },
  { title: "Consultation Room", url: "https://content.jdmagicbox.com/v2/comp/bangalore/q3/080pxx80.xx80.170129143610.i9q3/catalogue/suraksha-homeopathy-health-care-koramangala-bangalore-homeopathic-clinics-zqi0yabem4.jpg?imwidth=463.3333333333333" },
  { title: "Waiting Area", url: "https://images.jdmagicbox.com/v2/comp/bangalore/q3/080pxx80.xx80.170129143610.i9q3/catalogue/suraksha-homeopathy-health-care-koramangala-bangalore-homeopathic-clinics-kcexgmsq20.jpg" }
];
