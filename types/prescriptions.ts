export interface PrescriptionType {
    slug: string;
    patient_name: string;
    prescription_date: string;
    drug_name: string;
    dosage: string;
    frequency: string;
    quantity: number;
    refills: number;
    prescriber_name: string;
    prescriber_npi: string;
    pharmacy_name: string;
    pharmacy_npi: string;
};