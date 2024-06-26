export default function cacheHeaders(req, res, next) {
  /* Ajouter les en-têtes de sécurité */
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');

  /* Ajouter l'en-tête Cache-Control existant si aucun en-tête n'est défini */
  if (!res.getHeader('Cache-Control')) {
    console.log(`Setting Cache-Control for ${req.url}`);
    res.setHeader(
      'Cache-Control',
      'public, max-age=31536000, must-revalidate'
    );
  } else {
    console.log(`Cache-Control header already set for ${req.url}`);
  }

  /* Appeler next() pour passer au middleware suivant*/
  next();
}
