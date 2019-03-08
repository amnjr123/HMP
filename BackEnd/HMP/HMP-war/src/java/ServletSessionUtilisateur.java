/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import GestionUtilisateurs.GestionUtilisateurLocal;
import GestionUtilisateurs.Utilisateur;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.io.Writer;
import javax.ejb.EJB;
import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author 5151882
 */
@WebServlet(urlPatterns = {"/ServletSessionUtilisateur"})
public class ServletSessionUtilisateur extends HttpServlet {

    @EJB
    private GestionUtilisateurLocal gestionUtilisateur;

    private Utilisateur u = null;

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        setAccessControlHeaders(response);
        response.setContentType("application/json");

        JsonObjectBuilder objectBuilder = Json.createObjectBuilder();

        HttpSession session = request.getSession();
        String act = request.getParameter("action");

        //String act = request.getParameter("action");
        if (act.equals("Connexion")) {
            String mail = request.getParameter("login");
            String mdp = request.getParameter("mdp");
            u = gestionUtilisateur.authentification(mail, mdp);
            if (u != null) {
                session.setAttribute("UTILISATEUR", u);
                objectBuilder
                        .add("id", u.getId())
                        .add("mail", u.getMail())
                        .add("mdp", u.getMotdepasse());

                JsonObject jsonObject = objectBuilder.build();

                String jsonString;
                try (Writer writer = new StringWriter()) {
                    Json.createWriter(writer).write(jsonObject);
                    jsonString = writer.toString();
                }
                try (PrintWriter out = response.getWriter()) {
                    out.print(jsonString);
                }
            }

        }

        //RequestDispatcher rd = getServletContext().getRequestDispatcher(jspClient);
        //rd.forward(request, response);  
        /*try (PrintWriter out = response.getWriter()) {
         
        }*/
    }
     private void setAccessControlHeaders(HttpServletResponse resp) {
      resp.setHeader("Access-Control-Allow-Origin", "all");
      resp.setHeader("Access-Control-Allow-Methods", "POST");
  }


    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
