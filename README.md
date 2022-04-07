# Point bizarre

Tout est là. La seule définition pas rapport est la défintion du ingress que j'ai mis dans le project frontend.

## La seule chose a faire pour que ca puisse rouler sur un cluster tout neuf c'est de setter le token du cluster de Ocean Digital

La litérature est directement sur le Cluster, tu te download la config et le token y est.

### Les étapes sont simples

1. Tu roule le workflow de chaque projet:

- frontend
- backend
- mysql

Ceci déclanche les étapes nécessaire a déployer l'application sur un cluster Ocean Digital qui sont brièvement les suivantes:

Builder l'image
Pousser l'image sur Docker Hub
Déployer l'image sur Ocean Digital et la configurer

### Points à améliorer

- Faire fonctionner le delete du UI
- Créer des workflow pour un environement DEV et un environnement PROD
- Créer un projet infrastructure qui contient la définition de la BD mysql et de Ingress
- Renommer les projet avec des noms plus générique:
    frontend-od
    backend-od
    infra-od

- Refaire la même chose mais cette fois sur Google Cloud et Amazon.