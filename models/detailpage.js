<%- include('../includes/head.ejs') %>
    </head>

    <body>
        <%- include('../includes/navigation.ejs') %>
        <main class="centered"> 
            <h1><%=product.title %></h1>
            <hr>
            <div>
                <img src="<%= product.imageUrl %>" alt="<%=product.title %">
            </div>
            <h2><%= product.price %></h2>
            <p><%= product.description %></p>
            <form action="/cart" methid="post">
                <button class="btn" typee="submit">Add</button>
            </form>
        </main>
        <%- include('../includes/end.ejs') %>
