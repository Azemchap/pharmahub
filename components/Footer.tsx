// React and Next.js imports
import Link from "next/link";


// Icon imports
import { Facebook, Github, PillBottle, Twitter, } from "lucide-react";
import { Container, Section, } from "./craft";


// Asset imports
import { Button } from "./ui/button";

export default function Footer() {
    return (
        <footer>
            <Section>
                <Container className="grid gap-12 md:grid-cols-[1.5fr_0.5fr_0.5fr]">
                    <div className="not-prose flex flex-col gap-6">
                        <Link href="/" className="flex font-extrabold items-center gap-2">
                            <PillBottle className="h-6 w-6" />
                            PharmaHub
                        </Link>
                        <div>
                            Pharmacy platform to manage drugs, patients, prescriptions, reminders and more
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h5 className="font-extrabold">Application</h5>
                        <Link href="/patients">Patients</Link>
                        <Link href="/prescriptions">Prescriptions</Link>
                        <Link href="/drugs">Drugs</Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h5 className="font-extrabold">Legal</h5>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                        <Link href="/terms-of-service">Terms of Service</Link>
                        <Link href="/cookie-policy">Cookie Policy</Link>
                        <Link href="/admin">Admin</Link>
                    </div>
                </Container>
                <Container className="not-prose flex flex-col justify-between gap-6 border-t md:flex-row md:items-center md:gap-2">
                    <div className="flex gap-2">
                        <Button variant="outline" size="icon">
                            <Github />
                        </Button>
                        <Button variant="outline" size="icon">
                            <Twitter />
                        </Button>
                        <Button variant="outline" size="icon">
                            <Facebook />
                        </Button>
                    </div>
                    <p className="text-muted-foreground">
                        ©{" "}
                        <Link href="#">Royce</Link>.
                        All rights reserved. 2024.
                    </p>
                </Container>
            </Section>
        </footer>
    );
}
