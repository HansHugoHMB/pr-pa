export default {
  async fetch(request, env) {
    if (request.method === 'POST') {
      const formData = await request.formData();
      const email = formData.get('email');

      if (email) {
        const id = Date.now().toString();
        await env.EMAILS_NAMESPACE.put(id, email);
        return new Response('Email ajouté avec succès!', { status: 200 });
      } else {
        return new Response('Email invalide', { status: 400 });
      }
    }

    return new Response('Méthode non supportée', { status: 405 });
  },
};
