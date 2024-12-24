import AuthForm from "@/components/auth/auth-form";
import AuthPageImageCarousel from "@/components/auth/auth-page-image-carousel";
import Container from "@/components/ui/Container";
import React from "react";

const AuthPage = () => {
  return (
    <Container>
      <div className="container mx-auto min-h-[800px] grid grid-cols-1  md:grid-cols-2">
        <AuthForm />
        <AuthPageImageCarousel />
      </div>
    </Container>
  );
};

export default AuthPage;
