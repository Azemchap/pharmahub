const data = {
    prescriptions: [
        {
            "slug": "DB0hjhjuh0456",
            "patient_name": "John Doe",
            "prescription_date": "2023-05-01",
            "drug_name": "Amoxicillin",
            "dosage": "500mg",
            "frequency": "3 times a day",
            "quantity": 30,
            "refills": 1,
            "prescriber_name": "Dr. Jane Smith",
            "prescriber_npi": "1234567890",
            "pharmacy_name": "Main Street Pharmacy",
            "pharmacy_npi": "0987654321"
        },
        {
            "slug": "DBjerw00456",
            "patient_name": "Jane Doe",
            "prescription_date": "2023-04-15",
            "drug_name": "Metformin",
            "dosage": "1000mg",
            "frequency": "2 times a day",
            "quantity": 60,
            "refills": 2,
            "prescriber_name": "Dr. John Doe",
            "prescriber_npi": "0987654321",
            "pharmacy_name": "Elm Street Pharmacy",
            "pharmacy_npi": "1234567890"
        },
        {
            "slug": "DBluyiu00456",
            "patient_name": "Bob Smith",
            "prescription_date": "2023-03-20",
            "drug_name": "Atorvastatin",
            "dosage": "20mg",
            "frequency": "once a day",
            "quantity": 30,
            "refills": 3,
            "prescriber_name": "Dr. Jane Doe",
            "prescriber_npi": "1234567890",
            "pharmacy_name": "Oak Street Pharmacy",
            "pharmacy_npi": "0987654321"
        },
        {
            "slug": "DikyuiyuB00456",
            "patient_name": "Alice Johnson",
            "prescription_date": "2023-02-10",
            "drug_name": "Lisinopril",
            "dosage": "10mg",
            "frequency": "once a day",
            "quantity": 30,
            "refills": 1,
            "prescriber_name": "Dr. Bob Smith",
            "prescriber_npi": "0987654321",
            "pharmacy_name": "Maple Street Pharmacy",
            "pharmacy_npi": "1234567890"
        },
        {
            "slug": "DgiyuiB00456",
            "patient_name": "Tom Johnson",
            "prescription_date": "2023-01-05",
            "drug_name": "Ibuprofen",
            "dosage": "200mg",
            "frequency": "3 times a day",
            "quantity": 60,
            "refills": 2,
            "prescriber_name": "Dr. Alice Johnson",
            "prescriber_npi": "1234567890",
            "pharmacy_name": "Pine Street Pharmacy",
            "pharmacy_npi": "0987654321"
        },
        {
            "slug": "DB0uiouil0456",
            "patient_name": "Sarah Lee",
            "prescription_date": "2022-12-01",
            "drug_name": "Sertraline",
            "dosage": "50mg",
            "frequency": "once a day",
            "quantity": 30,
            "refills": 3,
            "prescriber_name": "Dr. Tom Johnson",
            "prescriber_npi": "0987654321",
            "pharmacy_name": "Cedar Street Pharmacy",
            "pharmacy_npi": "1234567890"
        },
        {
            "slug": "DB0ghjgh0456",
            "patient_name": "David Kim",
            "prescription_date": "2022-11-15",
            "drug_name": "Metoprolol",
            "dosage": "25mg",
            "frequency": "2 times a day",
            "quantity": 60,
            "refills": 1,
            "prescriber_name": "Dr. Sarah Lee",
            "prescriber_npi": "1234567890",
            "pharmacy_name": "Birch Street Pharmacy",
            "pharmacy_npi": "0987654321"
        },
        {
            "slug": "DBryrtu00456",
            "patient_name": "Emily Chen",
            "prescription_date": "2022-10-20",
            "drug_name": "Hydrochlorothiazide",
            "dosage": "12.5mg",
            "frequency": "once a day",
            "quantity": 30,
            "refills": 2,
            "prescriber_name": "Dr. David Kim",
            "prescriber_npi": "0987654321",
            "pharmacy_name": "Willow Street Pharmacy",
            "pharmacy_npi": "1234567890"
        },
        {
            "slug": "DB00uyu456",
            "patient_name": "Michael Lee",
            "prescription_date": "2022-09-25",
            "drug_name": "Amlodipine",
            "dosage": "5mg",
            "frequency": "once a day",
            "quantity": 30,
            "refills": 3,
            "prescriber_name": "Dr. Emily Chen",
            "prescriber_npi": "1234567890",
            "pharmacy_name": "Chestnut Street Pharmacy",
            "pharmacy_npi": "0987654321"
        },
        {
            "slug": "DB00456",
            "patient_name": "Jessica Park",
            "prescription_date": "2022-08-30",
            "drug_name": "Fluoxetine",
            "dosage": "20mg",
            "frequency": "once a day",
            "quantity": 30,
            "refills": 1,
            "prescriber_name": "Dr. Michael Lee",
            "prescriber_npi": "0987654321",
            "pharmacy_name": "Maple Avenue Pharmacy",
            "pharmacy_npi": "1234567890"
        }
    ],
    drugs: [
        {
            "slug": "DB00456",
            "serial": "CPRD03678",
            "name": "Metformin",
            "category": "Antidiabetic",
            "similar_drugs": [
                "Glucophage",
                "Fortamet",
                "Riomet"
            ],
            "dosage_forms": [
                "tablet",
                "extended-release tablet"
            ],
            "old_stock": 7,
            "old_stock_price": 10.00,
            "new_stock": 100,
            "new_stock_price": 22.00,
            "description": "Metformin is an oral diabetes medicine that helps control blood sugar levels. It is used to treat type 2 diabetes.",
            "use": "Type 2 diabetes",
            "side_effect": [
                "Nausea",
                "Vomiting",
                "Diarrhea"
            ],
            "warnings": [
                "May cause lactic acidosis, a serious and potentially fatal condition"
            ],
            "manufactured": "2023-03-15",
            "expire": "2025-03-14"
        },
        {
            "slug": "DB00789",
            "serial": "DPRD04901",
            "name": "Atorvastatin",
            "category": "Antihyperlipidemic",
            "similar_drugs": [
                "Lipitor",
                "Caduet",
                "Torvast"
            ],
            "dosage_forms": [
                "tablet"
            ],
            "old_stock": 0,
            "old_stock_price": 30.00,
            "new_stock": 0,
            "new_stock_price": 35.00,
            "description": "Atorvastatin is a statin medication used to lower cholesterol and triglyceride levels in the blood. It is used to prevent cardiovascular disease.",
            "use": "High cholesterol, cardiovascular disease prevention",
            "side_effect": [
                "Muscle pain",
                "Liver problems",
                "Increased blood sugar levels"
            ],
            "warnings": [
                "May interact with certain medications",
                "Can cause serious muscle problems"
            ],
            "manufactured": "2022-09-01",
            "expire": "2024-08-31"
        },
        {
            "slug": "DB01012",
            "serial": "EPRD05234",
            "name": "Amoxicillin",
            "category": "Antibiotic",
            "similar_drugs": [
                "Amoxil",
                "Trimox",
                "Moxatag"
            ],
            "dosage_forms": [
                "capsule",
                "tablet",
                "suspension"
            ],
            "old_stock": 9,
            "old_stock_price": 15.00,
            "new_stock": 100,
            "new_stock_price": 18.00,
            "description": "Amoxicillin is a penicillin-type antibiotic used to treat a wide variety of bacterial infections, including pneumonia, ear infections, and urinary tract infections.",
            "use": "Bacterial infections",
            "side_effect": [
                "Nausea",
                "Diarrhea",
                "Rash"
            ],
            "warnings": [
                "May interact with certain medications",
                "Can cause allergic reactions in people with penicillin allergies"
            ],
            "manufactured": "2023-06-01",
            "expire": "2025-05-31"
        },
        {
            "slug": "DB01235",
            "serial": "FPRD06567",
            "name": "Lisinopril",
            "category": "Antihypertensive",
            "similar_drugs": [
                "Prinivil",
                "Zestril",
                "Qbrelis"
            ],
            "dosage_forms": [
                "tablet"
            ],
            "old_stock": 47,
            "old_stock_price": 25.00,
            "new_stock": 50,
            "new_stock_price": 28.00,
            "description": "Lisinopril is an angiotensin-converting enzyme (ACE) inhibitor used to treat high blood pressure, heart failure, and to improve survival after a heart attack.",
            "use": "High blood pressure, heart failure, heart attack",
            "side_effect": [
                "Cough",
                "Dizziness",
                "Headache"
            ],
            "warnings": [
                "Can cause birth defects if taken during pregnancy",
                "May interact with certain medications"
            ],
            "manufactured": "2022-12-01",
            "expire": "2024-11-30"
        },
        {
            "slug": "DB01458",
            "serial": "GPRD07890",
            "name": "Metoprolol",
            "category": "Antihypertensive",
            "similar_drugs": [
                "Lopressor",
                "Toprol-XL",
                "Betaloc"
            ],
            "dosage_forms": [
                "tablet",
                "extended-release tablet"
            ],
            "old_stock": 60,
            "old_stock_price": 20.00,
            "new_stock": 10,
            "new_stock_price": 23.00,
            "description": "Metoprolol is a beta-blocker used to treat high blood pressure, angina, and heart failure. It can also be used to prevent migraine headaches.",
            "use": "High blood pressure, angina, heart failure, migraine prevention",
            "side_effect": [
                "Fatigue",
                "Dizziness",
                "Cold extremities"
            ],
            "warnings": [
                "Can worsen asthma or COPD symptoms",
                "May interact with certain medications"
            ],
            "manufactured": "2023-09-01",
            "expire": "2025-08-31"
        },
        {
            "slug": "DB01681",
            "serial": "HPRD08123",
            "name": "Sertraline",
            "category": "Antidepressant",
            "similar_drugs": [
                "Zoloft",
                "Lustral",
                "Serlift"
            ],
            "dosage_forms": [
                "tablet",
                "capsule"
            ],
            "old_stock": 5,
            "old_stock_price": 25.00,
            "new_stock": 200,
            "new_stock_price": 28.00,
            "description": "Sertraline is a selective serotonin reuptake inhibitor (SSRI) antidepressant used to treat depression, obsessive-compulsive disorder, panic disorder, and post-traumatic stress disorder.",
            "use": "Depression, OCD, panic disorder, PTSD",
            "side_effect": [
                "Nausea",
                "Diarrhea",
                "Insomnia"
            ],
            "warnings": [
                "May increase risk of suicidal thoughts in young adults",
                "Can interact with certain medications"
            ],
            "manufactured": "2022-03-01",
            "expire": "2024-02-28"
        },
        {
            "slug": "DB01904",
            "serial": "IPRD09456",
            "name": "Omeprazole",
            "category": "Proton Pump Inhibitor",
            "similar_drugs": [
                "Prilosec",
                "Losec",
                "Zegerid"
            ],
            "dosage_forms": [
                "capsule",
                "tablet"
            ],
            "old_stock": 65,
            "old_stock_price": 18.00,
            "new_stock": 40,
            "new_stock_price": 20.00,
            "description": "Omeprazole is a proton pump inhibitor used to treat gastroesophageal reflux disease (GERD), peptic ulcers, and other conditions involving excessive stomach acid production.",
            "use": "GERD, peptic ulcers, excessive stomach acid",
            "side_effect": [
                "Headache",
                "Diarrhea",
                "Abdominal pain"
            ],
            "warnings": [
                "Long-term use may increase risk of fractures",
                "Can interact with certain medications"
            ],
            "manufactured": "2023-04-01",
            "expire": "2025-03-31"
        },
        {
            "slug": "DB02127",
            "serial": "JPRD10789",
            "name": "Simvastatin",
            "category": "Antihyperlipidemic",
            "similar_drugs": [
                "Zocor",
                "Simcard",
                "Simlup"
            ],
            "dosage_forms": [
                "tablet"
            ],
            "old_stock": 75,
            "old_stock_price": 28.00,
            "new_stock": 85,
            "new_stock_price": 32.00,
            "description": "Simvastatin is a statin medication used to lower cholesterol and triglyceride levels in the blood. It is used to prevent cardiovascular disease.",
            "use": "High cholesterol, cardiovascular disease prevention",
            "side_effect": [
                "Muscle pain",
                "Liver problems",
                "Increased blood sugar levels"
            ],
            "warnings": [
                "May interact with certain medications",
                "Can cause serious muscle problems"
            ],
            "manufactured": "2022-11-01",
            "expire": "2024-10-31"
        }
    ]
}

export default data