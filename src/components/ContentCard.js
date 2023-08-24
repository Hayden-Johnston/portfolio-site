import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';


export default function MultipleInteractionCard({ project }) {
  return (
    <Card variant="outlined" sx={{ width: 330 }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            src= {project.image}
            // srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="h2" fontSize="md">
          <Link href= {project.link} overlay underline="none">
            {project.project}
          </Link>
        </Typography>
        <Typography level="body2" sx={{ mt: 0.5 }}>
          {project.tech}
        </Typography>
      </CardContent>
    </Card>
  );
}