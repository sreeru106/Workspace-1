
mainApp.factory('StudentService', ['$http', '$q' , '$rootScope', function($http,$q, $rootScope){
	
	var factory = {
	        fetchAllStudents: fetchAllStudents,
	        createStudent: createStudent,
	        updateStudent:updateStudent,
	       deleteStudent:deleteStudent,
	       setData:setData
	    };
	
	factory.data = [];
	
	return factory;
	
	function setData(data) {
		factory.data=data;		
	}	
	
	function fetchAllStudents() {
        var deferred = $q.defer();
        $http.get('/allStudent').then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResp){
                console.error('Error while fetching Students');
                deferred.reject(errResp);
            }
        );
        return deferred.promise;
    }
 
    function createStudent(student) {
        var deferred = $q.defer();
        $http.post('addStudent', student)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResp){
                console.error('Error while creating Student');
                deferred.reject(errResp);
            }
        );
        return deferred.promise;
    }
	
    function deleteStudent(stud){
    	var deferred = $q.defer();
        $http.delete('deleteStudent/'+stud.id).then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResp){
                console.error('Error while deleting Student');
                deferred.reject(errResp);
            }
        );
        return deferred.promise;
    }
    
    function updateStudent(stud, id){
    	var deferred = $q.defer();
        $http.put('modifyStudent/'+id, stud).then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResp){
                console.error('Error while editing Student');
                deferred.reject(errResp);
            }
        );
        return deferred.promise;
    }
    
    
}]);